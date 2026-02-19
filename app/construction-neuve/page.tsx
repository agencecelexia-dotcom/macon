import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { getServiceBySlug } from "@/lib/data/services";

const service = getServiceBySlug("construction-neuve")!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
};

export default function ConstructionNeuvePage() {
  return <ServicePageTemplate service={service} />;
}
