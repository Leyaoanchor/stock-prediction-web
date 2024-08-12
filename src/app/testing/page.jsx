import React from "react";
import CreateForm from "../dashboard/_components/CreateForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BarChart2,
  Bookmark,
  FilePlus,
  FileText,
  Headphones,
  Search,
  Settings,
  Share2,
  Shield,
  Smile,
} from "lucide-react";
import Image from "next/image";

const reviews = [];

const Hero = () => {
  return (
    <div id="top">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[calc(100vh-56px)] lg:items-center">
          <div className="flex justify-between align-middle">
            <div className="max-w-3xl text-center my-auto">
              <h1 className="bg-gradient-to-r from-orange-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl">
                Using AI technology to help make decision.
                {/* <span className="sm:block"> Increase Conversion. </span> */}
              </h1>

              <p className="mx-auto mt-8 max-w-xl sm:text-xl/relaxed">
                Predict real time stock price by AI.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <CreateForm />
              </div>
            </div>
            <Image
              alt=""
              src="/business-3d-friendly-robot-assistant-waving.png"
              width={300}
              height={400}
              className="hidden md:block"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
