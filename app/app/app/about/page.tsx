"use client";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import ProfileList from "@/components/twitterProfiles";

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row justify-start overflow-hidden text-primary">
      {/* Text Content Section */}
      <div className="text-content max-w-6xl mx-auto px-12 md:w-1/2 order-2 md:order-1">
        <Title />
        <p className="subtitle font-ibm-mono text-lg sm:text-2xl md:text-4xl mt-2">
          An AI Agent which is used for research and investing in meme coins.
        </p>
        <hr className="my-8 border-gray-600" />
        <div className="info mt-8 pb-8">
          <p className="font-ibm-mono text-gray-400">
            Write now it is experimental project use it with your own risk
            Please contact us for any feedback and queries :)
          </p>
          <ProfileList />
          <hr className="my-8 border-gray-600" />
          <Footer />
        </div>
      </div>
    </div>
  );
}
