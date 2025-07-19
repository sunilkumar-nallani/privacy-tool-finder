import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Users, Code, ArrowLeft } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Privacy Tools Survey
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Helping you find the right privacy tools for your digital life
            </p>
          </div>

          {/* Why Privacy Matters */}
          <Card className="p-8 mb-8 animate-scale-in">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Shield className="mr-3 h-6 w-6 text-primary" />
              Why Does Privacy Matter?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                In today's digital world, your personal data is constantly being collected, analyzed, 
                and monetized by corporations and governments. Every click, search, message, and 
                location is potentially tracked and stored.
              </p>
              <p>
                Privacy isn't about hiding something wrong—it's about maintaining your fundamental 
                right to control your own information. It's about preventing manipulation through 
                targeted advertising, protecting yourself from data breaches, and ensuring your 
                communications remain private.
              </p>
              <p>
                The good news is that there are excellent privacy-respecting alternatives to 
                mainstream tools. Our survey helps you find the ones that fit your specific 
                needs and technical comfort level.
              </p>
            </div>
          </Card>

          {/* How We Choose Tools */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Code className="mr-3 h-6 w-6 text-primary" />
              How Do We Choose These Tools?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Privacy Practices</h3>
                <p className="text-muted-foreground">
                  We evaluate each tool's privacy policy, data collection practices, and 
                  history of protecting user privacy. Tools that collect unnecessary data 
                  or have poor privacy records are excluded.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Security Features</h3>
                <p className="text-muted-foreground">
                  We look for strong encryption, regular security updates, and features 
                  that protect against common threats like tracking and surveillance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Open Source Preference</h3>
                <p className="text-muted-foreground">
                  When possible, we prioritize open-source tools that can be independently 
                  audited and verified by security researchers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">User Experience</h3>
                <p className="text-muted-foreground">
                  Privacy tools should be usable. We consider ease of setup, learning curve, 
                  and overall user experience to ensure our recommendations are practical.
                </p>
              </div>
            </div>
          </Card>

          {/* About the Survey */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Users className="mr-3 h-6 w-6 text-primary" />
              About Our Survey
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our survey asks about your privacy priorities, technical comfort level, 
                device usage, and specific concerns. Based on your answers, we calculate 
                compatibility scores for different privacy tools.
              </p>
              <p>
                The survey has two parts: 10 essential questions that everyone should answer, 
                and 10 additional questions for more detailed recommendations. The extended 
                questions help us fine-tune our suggestions for users who want the most 
                personalized recommendations.
              </p>
              <p>
                We don't store your answers or track your responses. Everything happens 
                locally in your browser, and you can share your results without revealing 
                your specific answers.
              </p>
            </div>
          </Card>

          {/* Categories Explained */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Tool Categories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  🌐 Browsers
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your web browser is your gateway to the internet. Privacy-focused browsers 
                  block trackers, prevent fingerprinting, and protect your browsing data.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  💬 Messaging Apps
                </h3>
                <p className="text-sm text-muted-foreground">
                  End-to-end encrypted messaging ensures only you and your recipients can 
                  read your messages, not the service provider or governments.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  🛡️ VPN Services
                </h3>
                <p className="text-sm text-muted-foreground">
                  VPNs encrypt your internet traffic and hide your IP address, protecting 
                  you from ISP monitoring and improving privacy on public networks.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  💻 Operating Systems
                </h3>
                <p className="text-sm text-muted-foreground">
                  Privacy-focused operating systems minimize data collection and give you 
                  more control over your device and personal information.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Ready to improve your privacy?</h3>
            <Link to="/survey">
              <Button size="lg" className="px-8">
                Take the Survey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;