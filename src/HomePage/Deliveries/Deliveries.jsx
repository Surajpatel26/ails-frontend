import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Deliveries.css";
import onlineIcon from "../../assets/online-icon.png";
import oneOnOneIcon from "../../assets/offline-icon.png";
import locationIcon from "../../assets/BTL-3.png";
import flexiIcon from "../../assets/cunstomized.png";

const deliveries = [
  { id: 1, title: "Live Online Training", icon: onlineIcon, description: "Join live, interactive sessions from anywhere." },
  { id: 2, title: "1-on-1 Training", icon: oneOnOneIcon, description: "Personalized sessions tailored to your needs." },
  { id: 3, title: "Bring Trainer to Your Location", icon: locationIcon, description: "Let us bring our expert trainers to your workplace." },
  { id: 4, title: "Flexi", icon: flexiIcon, description: "Flexible learning at your own pace and convenience." }
];

const Deliveries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setVisible(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="deliveries-section">
      <motion.h2 
        className={`deliveries-heading ${visible ? "show" : ""}`}
      >
        Delivery Methods
      </motion.h2>

      <div className="deliveries-grid">
        {deliveries.map((delivery, index) => (
          <motion.div
            key={delivery.id}
            className={`delivery-card ${visible ? "show" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon-container">
              <motion.img 
                src={delivery.icon} 
                alt={delivery.title} 
                className="delivery-icon"
                whileHover={{ rotate: 5, scale: 1.1 }}
              />
            </div>
            <h3 className="delivery-title">{delivery.title}</h3>
            <p className="delivery-description">{delivery.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Deliveries;
