import {z} from "zod"

const questionSchema = z.object({
  q1: z.string().max(100).optional(),
  q2: z.string().max(100).optional(),
  q3: z.string().max(100).optional(),
  q4: z.string().max(100).optional(),
  q5: z.string().max(100).optional()
})

export const projectFormSchema = z.object({
  name: z.string().min(3).max(20),
  logo: z.instanceof(File).refine(file => file.type.startsWith("image/"), {
    message: "Logo must be an image"
  }),
  header: z.string().min(3, {
    message: "title should be atleast 3 characters"
  }),
  customMessage: z.string().min(5, {
    message: "Min 3 char"
  }).max(100, {
    message: "Message limit 100 char"
  }),
  questions: questionSchema
})

export const testimonialFormSchema = z.object({
  name: z.string().min(3).max(30, {
    message: "Name should be atleast 3 chars"
  }),
  email: z.string().email({
    message: "Invalid email"
  }),
  rating: z.coerce.number().min(1).max(5),
})

export const textTestimonialFormSchema = testimonialFormSchema.extend({
  text: z.string().min(10, {
    message: "Min 10 chars"
  }),
})

export const videoTestimonialFormSchema = testimonialFormSchema.extend({
  video: z.string().startsWith("https", {
    message: "Enter a valid link"
  }),

})


export type QuestionType = z.infer<typeof questionSchema>
export type ProjectFormValues = z.infer<typeof projectFormSchema>
export type TextTestimonialFormValues = z.infer<typeof textTestimonialFormSchema>
export type VideoTestimonialFormValues = z.infer<typeof videoTestimonialFormSchema>