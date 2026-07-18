"use client";

import Hero from "@/components/home/Hero";
import ProblemStatement from "@/components/home/ProblemStatement";
import HowItWorks from "@/components/home/HowItWorks";
import AiPredictions from "@/components/home/AiPredictions";
import DesignedFor from "@/components/home/DesignedFor";
import FeatureCard from "@/components/ui/FeatureCard";
import { features } from "@/lib/dummyData";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
      <Hero />
      <ProblemStatement />
      <HowItWorks />
      <AiPredictions />
      
      <section style={{ padding: '0 5%', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h2 className="title-medium" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Platform Capabilities
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={0.2 + (index * 0.1)}
            />
          ))}
        </div>
      </section>

      <DesignedFor />
    </div>
  );
}
