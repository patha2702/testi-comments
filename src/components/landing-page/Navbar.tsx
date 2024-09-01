"use client";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SignIn from "@/components/SignIn";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 max-w-7xl mx-auto z-50 bg-white/80 backdrop-blur-md rounded-full",
        className
      )}
    >
      <div className="flex items-center justify-between py-4 px-6">
        <Link className="flex items-center cursor-pointer" href={"/"}>
          <Image
            src="/assets/images/logo.png"
            alt="TestiCollect Logo"
            width={50}
            height={50}
          />
          <div>
            <span className="max-sm:hidden text-2xl font-bold text-indigo-600">
              TestimonialsCollect
            </span>
            <span className="sm:hidden text-2xl font-bold text-indigo-600">
              Testimonials
            </span>
          </div>
        </Link>
        <div className="max-md:hidden">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Features">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#custom-questions">
                  Custom Questions
                </HoveredLink>
                <HoveredLink href="#easy-collection">
                  Easy Collection
                </HoveredLink>
                <HoveredLink href="#customizable-widgets">
                  Customizable Widgets
                </HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Showcase">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Wall of Fame"
                  href="#wall-of-fame"
                  src="/wall-of-fame-preview.png"
                  description="Display your best testimonials in a stunning wall layout."
                />
                <ProductItem
                  title="Carousel Slider"
                  href="#carousel-slider"
                  src="/carousel-slider-preview.png"
                  description="Showcase testimonials in an interactive carousel."
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="#hobby">Hobby</HoveredLink>
                <HoveredLink href="#pro">Pro</HoveredLink>
                <HoveredLink href="#enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
        <SignIn />
      </div>
    </div>
  );
}
