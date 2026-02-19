'use client'
import Link from "next/link";
import { Icon } from "@iconify/react";

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-section dark:bg-darklight text-center">
      <div className="container mx-auto max-w-6xl px-4">

        <h2 className="text-3xl font-semibold dark:text-white">
          Our Placement Services
        </h2>

        <p className="mt-3 text-midnight_text/70 dark:text-white/60">
          Resume updates, manual job applications, recruiter follow-ups and interview support.
        </p>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 mt-8 bg-primary text-white px-6 py-3 rounded-full"
        >
          View Full Services
          <Icon icon="ei:chevron-right" width="20" />
        </Link>

      </div>
    </section>
  );
};

export default ServicesPreview;
