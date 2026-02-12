import { motion } from "framer-motion";
import { CloudRain, Cpu, AlertTriangle, Users } from "lucide-react";

const steps = [
  {
    icon: CloudRain,
    step: "01",
    title: "Data Collection",
    description: "IoT sensors, satellites, and weather stations continuously gather environmental data.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Analysis",
    description: "Machine learning models process data to detect patterns and predict flood probability.",
  },
  {
    icon: AlertTriangle,
    step: "03",
    title: "Alert Generation",
    description: "When risk thresholds are exceeded, automated warnings are dispatched to authorities and citizens.",
  },
  {
    icon: Users,
    step: "04",
    title: "Coordinated Response",
    description: "Emergency teams execute evacuation plans and deploy resources to affected areas.",
  },
];

const HowItWorksSection = () => {
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
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="text-6xl font-bold text-primary/10 mb-4 font-display">{s.step}</div>
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-4 w-8 border-t border-dashed border-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
