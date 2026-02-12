import { motion } from "framer-motion";
import { Brain, Radio, MapPin, Bell, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Prediction",
    description: "Machine learning models analyze weather, terrain, and historical data to predict floods days in advance.",
  },
  {
    icon: Radio,
    title: "IoT Sensor Network",
    description: "Distributed water-level and rainfall sensors provide continuous real-time environmental monitoring.",
  },
  {
    icon: MapPin,
    title: "Risk Mapping",
    description: "Dynamic flood risk maps highlight vulnerable zones with color-coded severity overlays.",
  },
  {
    icon: Bell,
    title: "Early Warnings",
    description: "Automated multi-channel alerts via SMS, email, and sirens give communities time to prepare.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive dashboards visualize water levels, rainfall intensity, and historical flood patterns.",
  },
  {
    icon: Shield,
    title: "Disaster Response",
    description: "Coordinate evacuation routes, resource allocation, and emergency services in real time.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-primary mb-3 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            End-to-End Flood <span className="text-gradient">Intelligence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A complete platform from prediction to response, powered by cutting-edge technology.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group glass rounded-xl p-8 hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:glow-sm transition-shadow">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
