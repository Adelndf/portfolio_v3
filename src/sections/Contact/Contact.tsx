import "./Contact.css";
import { motion } from "framer-motion";
import { AiOutlineWhatsApp, AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegramPlane, FaPhoneSquare } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="contact">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        {t("contact_title1")} <span>{t("contact_titleSpan")}</span>{" "}
        {t("contact_title2")}
      </motion.h1>
      <div className="contact__container">
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          href="https://wa.me/0538040776"
          target="_blank"
          className="contact__box"
          rel="noreferrer"
        >
          <AiOutlineWhatsApp />
          <p>{t("contact_whatsApp")}</p>
        </motion.a>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          href="https://telegram.me/iAdeNDF"
          target="_blank"
          rel="noreferrer"
          className="contact__box"
        >
          <FaTelegramPlane />
          <p>{t("contact_telegram")}</p>
        </motion.a>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          href="https://twitter.com/iAdelDev"
          target="_blank"
          rel="noreferrer"
          className="contact__box"
        >
          <AiFillTwitterCircle />
          <p>{t("contact_twitter")}</p>
        </motion.a>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          href="tel:+966538040776"
          className="contact__box"
        >
          <FaPhoneSquare />
          <p>{t("contact_callMe")}</p>
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
