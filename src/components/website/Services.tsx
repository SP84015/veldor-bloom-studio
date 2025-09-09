import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, MapPin, Flower, Camera, ChefHat, Sprout } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon_name: string;
}

const iconMap = {
  Calendar: Calendar,
  MapPin: MapPin,
  Flower: Flower,
  Camera: Camera,
  ChefHat: ChefHat,
  Sprout: Sprout,
};

export const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data: website } = await supabase
          .from("websites")
          .select("id")
          .eq("is_active", true)
          .single();

        if (website) {
          const { data: servicesData } = await supabase
            .from("website_services")
            .select("*")
            .eq("website_id", website.id)
            .order("created_at");

          setServices(servicesData || []);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">Loading services...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From wedding planning to big seed solutions, we offer comprehensive services 
              to make your dreams come true.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon_name as keyof typeof iconMap] || Calendar;
              
              return (
                <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300 bg-card border-border">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};