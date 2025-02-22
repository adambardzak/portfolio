"use client";

import { Logo } from "./Logo";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { FramedBox } from "./ui/FramedBox";
import { Frame } from "@/lib/brand";

const BrandShowcase = () => {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="space-y-32">
          {/* Logo Variations */}
          <section>
            <h2 className="text-2xl font-monument mb-16">Logo System</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <Card>
                <h3 className="font-monument mb-8">Default</h3>
                <Logo variant="default" />
              </Card>
              <Card>
                <h3 className="font-monument mb-8">Compact</h3>
                <Logo variant="compact" />
              </Card>
              <Card>
                <h3 className="font-monument mb-8">Framed Type</h3>
                <Logo variant="framed-type" />
              </Card>
            </div>
          </section>

          {/* Brand Elements */}
          <section>
            <h2 className="text-2xl font-monument mb-16">Brand Elements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Buttons */}
              <Card>
                <h3 className="font-monument mb-8">Buttons</h3>
                <div className="space-y-4">
                  <Button variant="primary">Primary Action</Button>
                  <Button variant="secondary">Secondary Action</Button>
                  <Button variant="text">Text Link</Button>
                </div>
              </Card>

              {/* Cards */}
              <Card>
                <h3 className="font-monument mb-8">Cards</h3>
                <div className="space-y-4">
                  <Card size="sm">Small Card</Card>
                  <Card size="lg">Large Card</Card>
                </div>
              </Card>

              {/* Typography */}
              <Card>
                <h3 className="font-monument mb-8">Typography</h3>
                <div className="space-y-4">
                  <h4 className="font-monument text-xl">Heading</h4>
                  <p className="text-gray-600 dark:text-gray-300">Body Text</p>
                  <code className="font-mono text-sm">Code Text</code>
                </div>
              </Card>
            </div>
          </section>

          {/* Frame Variants */}
          <section>
            <h2 className="text-2xl font-monument mb-16">Frame Variants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(Object.keys(Frame.variants) as Array<keyof typeof Frame.variants>).map((variant) => (
                <Card key={variant}>
                  <h3 className="font-monument mb-4 capitalize">{variant}</h3>
                  <div className="space-y-4">
                    <FramedBox variant={variant} size="sm">
                      Small Frame
                    </FramedBox>
                    <FramedBox variant={variant} size="md">
                      Medium Frame
                    </FramedBox>
                    <FramedBox variant={variant} size="lg">
                      Large Frame
                    </FramedBox>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* More sections... */}
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;
