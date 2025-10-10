import React, { useState } from "react";
import { GradientButton } from "../ui";
import Image from "next/image";
import { images } from "@/constants";
import { motion } from "framer-motion";
import { Star } from "../icons";
import { addSubscriber } from "@/utils";
import { showErrorToast, showSuccessToast } from "@/utils/notification";

export const Waitlist = () => {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.target);
    const res = await addSubscriber(formData);
    if (res.successMessage) {
      showSuccessToast(res.successMessage);
    } else {
      showErrorToast(res.errorMessage || "");
    }
    setIsPending(false);
  };

  return (
    <section id="waitlist" className="relative flex flex-col gap-14 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="self-center"
      >
        <GradientButton
          radius="12px"
          rootClassName="mb-6"
          className="px-[58px] py-4"
        >
          Product Details
        </GradientButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-[1034px] w-full mx-auto mb-[104px] rounded-xl p-3"
      >
        <div className="absolute inset-0 border-gradient rounded-3xl animate-border-spin" />
        <div className="bg-black/70 py-6 px-5 z-10 relative rounded-xl">
          <div className="mt-20">
            <div className="max-w-[659px] mx-auto w-full">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:text-3xl text-xl font-bold text-center mb-4"
              >
                Have questions or want to partner with us?
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{
                  backgroundImage:
                    "linear-gradient(274.05deg, #FBCF21 -37.86%, #AA7414 125.4%)",
                }}
                className="text-3xl md:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent"
              >
                JOIN OUR WAITLIST
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center text-[#9E9E9E] mb-12"
              >
                Be Among the First 5,000 Traders
                <br />
                Don&apos;t miss your chance to be part of Pipn from day one.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-[#E2E2E205] border border-[#232323] rounded-2xl pb-8 mb-12"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-[75px] h-[75px] bg-black/70 flex mb-3 -mt-10 mx-auto items-center justify-center rounded-full border-2 border-[#232323]"
                >
                  <Image
                    src={images.medal}
                    alt="Medal"
                    width={44}
                    height={51}
                  />
                </motion.div>

                <p className="text-center text-lg text-[#9E9E9E] mb-4">
                  Early adopters get exclusive perks:
                </p>

                <div className="space-y-2 w-fit mx-auto">
                  {[
                    "Founding Trader Badge",
                    "Early access to Pipn app",
                    "Priority features & rewards",
                  ].map((perk, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      whileHover={{ x: 10, scale: 1.05 }}
                      className="text-[#616161] text-lg flex items-center gap-1 text-center"
                    >
                      <Star />
                      <span>{perk}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <motion.h5
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#616161] text-xl font-semibold self-center md:text-3xl"
              >
                Contact Form
              </motion.h5>

              <div className="space-y-6 w-full">
                {[
                  {
                    label: "Full Name",
                    type: "text",
                    placeholder: "Enter your full name",
                    name: "fullName",
                  },
                  {
                    label: "Business Email",
                    type: "email",
                    name: "email",
                    placeholder: "Enter your business email",
                  },
                ].map((field, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <label className="block text-sm mb-2">{field.label}</label>
                    <motion.input
                      whileFocus={{ scale: 1.01, borderColor: "#3b82f6" }}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                      required
                    />
                  </motion.div>
                ))}

                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm mb-2">Request Content</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01, borderColor: "#3b82f6" }}
                    placeholder="How we can help you"
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                  />
                </motion.div> */}

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-[#868686]"
                >
                  By submitting your email address, you agree to receive
                  occasional marketing messages from PIPN, from which you can
                  unsubscribe at any time. For more information please see our
                  privacy policy.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <GradientButton
                    animation={{
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                    }}
                    radius="8px"
                    className="w-full py-4 font-bold text-lg"
                    rootClassName="w-full"
                    type="submit"
                    loading={isPending}
                  >
                    Join Waitlist
                  </GradientButton>
                </motion.div>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
