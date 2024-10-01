"use client";
import {
  videoTestimonialFormSchema,
  VideoTestimonialFormValues,
} from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Label from "./Label";
import { useRouter } from "next/navigation";

const VideoTestimonialForm = ({
  collectionId,
  collectionName,
}: {
  collectionId: string;
  collectionName: string;
}) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<VideoTestimonialFormValues>({
    resolver: zodResolver(videoTestimonialFormSchema),
  });
  const handleTestimonialSubmission = async (
    data: VideoTestimonialFormValues
  ) => {
    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: data.name,
            email: data.email,
            video: data.video,
            rating: data.rating,
            collectionId: collectionId,
            type: "video",
          },
        }),
      });
      if (!res.ok) {
        setErrorMessage("Failed to create your testimonial, please try again");
      } else {
        router.push(`/${collectionName}/thankyou`);
      }
    } catch (err: any) {
      console.error("Failed to create testimonial", err);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleTestimonialSubmission)}>
      <div className="py-2 flex flex-col gap-2">
        <fieldset className="flex flex-col">
          <Label label={"Name"} required={true} />
          <input
            type={"text"}
            placeholder={"Bahubali"}
            {...register("name")}
            className="p-2 rounded-lg border border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none"
          />
          <p className="text-red-600 text-sm">{errors.name?.message}</p>
        </fieldset>

        <fieldset className="flex flex-col">
          <Label label={"Email"} required={true} />
          <input
            type={"text"}
            placeholder={"mahishmati@email.com"}
            {...register("email")}
            className="p-2 rounded-lg border border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none"
          />
          <p className="text-red-600 text-sm">{errors.email?.message}</p>
        </fieldset>

        <fieldset className="flex flex-col">
          <Label label={"Testimonial Video Url"} required={true} />
          <textarea
            placeholder={"Share your google drive video link"}
            {...register("video")}
            className="p-2 rounded-lg border border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none"
          />
          <p className="text-red-600 text-sm">{errors.video?.message}</p>
        </fieldset>
        <fieldset className="flex flex-col">
          <Label label="Rating" required={true} />
          <input
            type="text"
            {...register("rating")}
            placeholder="5.0"
            className="p-2 rounded-lg border border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none"
          />
          <p className="text-red-600 text-sm">{errors.rating?.message}</p>
        </fieldset>
      </div>
      <p className="text-red-600 text-sm">{errorMessage}</p>
      <button
        className="rounded-xl sm:mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-xl text-white font-semibold"
        type="submit"
      >
        {isSubmitting ? (
          <LoaderCircle className="animate-spin mx-auto" />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default VideoTestimonialForm;