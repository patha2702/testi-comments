"use client";
import React, { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";


const features = [
    {
      title: "Custom Questions",
      description: "Create up to 5 tailored questions for each project to gather specific feedback from your customers.",
      link: "#custom-questions",
    },
    {
      title: "Easy Collection",
      description: "Simplify the process with a shareable link. Customers can quickly provide testimonials without any hassle.",
      link: "#easy-collection",
    },
    {
      title: "Customizable Widgets",
      description: "Choose from various designs to showcase your testimonials. From wall of fame to carousels, we've got you covered.",
      link: "#customizable-widgets",
    },
    {
      title: "Dashboard Analytics",
      description: "Get insights on your testimonials' performance with our intuitive dashboard and analytics tools.",
      link: "#dashboard-analytics",
    },
    {
      title: "Social Media Integration",
      description: "Easily share your best testimonials on social media platforms to boost your online presence.",
      link: "#social-media-integration",
    },
    {
      title: "AI-Powered Insights",
      description: "Leverage AI to analyze testimonials and gain valuable insights about your customers' experiences.",
      link: "#ai-powered-insights",
    },
  ];
  
  export default function KeyFeatures() {
    return (
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Discover how TestiCollect can transform your customer feedback into powerful testimonials.
            </p>
          </div>
          <div className="mt-16">
            <HoverEffect items={features} />
          </div>
        </div>
      </section>
    );
  }