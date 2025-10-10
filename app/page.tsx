"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared";
import { GradientButton } from "@/components/ui";
import { images } from "@/constants";
import Image from "next/image";
import { Dollar, Download, Star } from "@/components/icons";

const navItems = [
  { name: "Product Features", value: "features" },
  { name: "Application", value: "application" },
  { name: "About Us", value: "about" },
];

const PipnLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="px-4 pt-2">
          <div className="flex justify-between gap-2">
            {/* Logo */}
            <motion.div
              className="flex bg-[#121212] py-0 md:py-3 px-10 rounded-bl-2xl items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("hero")}
            >
              <Logo className="md:w-[127px] w-20 h-[60px]" />
            </motion.div>

            <div className="flex bg-[#121212] px-8 rounded-br-2xl items-center flex-1 justify-end min-[955px]:justify-between">
              {/* Desktop Navigation */}
              <div className="hidden min-[955px]:flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      scrollToSection(item.value);
                      setSelected(item.value);
                    }}
                    className={`${selected === item.value ? "text-white" : "text-[#616161]"} hover:text-white cursor-pointer flex items-center gap-[6px] transition-colors`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${selected === item.value ? "bg-[#04A933]" : "bg-[#616161]"}`}
                    />
                    {item.name}
                  </button>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center gap-4">
                <button className="px-4 py-2 bg-[#282828] cursor-pointer text-sm font-medium hover:bg-gray-700 rounded-lg transition-colors">
                  Get App
                </button>
                <GradientButton
                  radius="8px"
                  className="px-[19px] text-sm font-medium py-3"
                  onClick={() => scrollToSection("waitlist")}
                >
                  Join Waitlist
                </GradientButton>
              </div>
              {/* Mobile Menu Button */}
              <button
                className="min-[955px]:hidden ml-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-[955px]:hidden bg-black/95 border-t border-gray-800"
          >
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left text-green-400 py-2"
              >
                Product Features
              </button>
              <button
                onClick={() => scrollToSection("application")}
                className="block w-full text-left text-gray-400 py-2"
              >
                Application
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-gray-400 py-2"
              >
                About Us
              </button>
              <button className="px-4 w-full py-2 bg-[#282828] cursor-pointer text-sm font-medium hover:bg-gray-700 rounded-lg transition-colors">
                Get App
              </button>
              <GradientButton
                radius="8px"
                rootClassName="w-full"
                className="px-[19px] w-full text-sm font-medium py-3"
                onClick={() => scrollToSection("waitlist")}
              >
                Join Waitlist
              </GradientButton>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-8 md:pt-20 overflow-hidden"
      >
        {/* Stage Light Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={images.chain}
            alt="Chain"
            width={278}
            height={185}
            className="absolute bottom-28 left-0 opacity-[46%]"
          />
          <Image
            src={images.chain}
            alt="Chain"
            width={278}
            height={185}
            className="absolute bottom-24 left-[10%]"
          />
          <Image
            src={images.chain}
            alt="Chain"
            width={428}
            height={285}
            className="absolute bottom-0 left-[20%] opacity-[46%]"
          />
          <Image
            src={images.chain}
            alt="Chain"
            width={278}
            height={185}
            className="absolute bottom-24 left-[40%] opacity-[46%]"
          />
          <Image
            src={images.chain}
            alt="Chain"
            width={278}
            height={185}
            className="absolute bottom-28 left-[50%] z-[1] opacity-[46%]"
          />
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            src={images.heroImage.src}
            alt="Hero Image"
            width={494}
            height={671}
            className="w-[800px] absolute right-[-100px] bottom-[-80px] h-auto -rotate-[89deg]"
          />
          {/* Left Light */}
          <motion.div
            className="absolute stage-light w-20 h-[80%]"
            style={{ top: 0, left: "210px", rotate: "-30deg" }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute stage-light w-20 h-[80%]"
            style={{ top: 0, left: "131px", rotate: "-30deg" }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute stage-light w-20 h-[80%]"
            style={{ top: 0, right: "210px", rotate: "30deg" }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute stage-light w-20 h-[80%]"
            style={{ top: 0, right: "131px", rotate: "30deg" }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[894px] mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:text-4xl text-xl font-extrabold mb-6 leading-tight"
          >
            Trade smarter. Connect deeper. Grow faster.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-base md:text-2xl text-[#8A8A8A] mb-12"
          >
            Join a global trading community. Share ideas, offer services, and
            build credibility — all in one platform.
          </motion.p>

          {/* Pipn Logo with Gradient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 relative inline-block"
          >
            <div className="w-fit h-fit relative">
              <Image
                src={images.pipnText}
                className="animate-pulse"
                alt="Pipn text"
              />
              <p className="text-sm sm:text-base absolute top-[50%] bg-black py-2 pl-[30px] pr-[6px] rounded-tr-[6px] rounded-br-2xl text-white font-extrabold">
                The Social App for Traders
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex pb-4 items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-[#222222] hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            >
              <Download />
            </motion.button>
            <GradientButton
              radius="8px"
              onClick={() => scrollToSection("waitlist")}
              className="px-8 py-3 text-lg font-semibold"
            >
              Join Waitlist
            </GradientButton>
          </motion.div>

          {/* Purple Chain Assets */}
          {/* <div className="absolute left-4 sm:left-8 md:left-16 bottom-20 sm:bottom-32">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={`chain-left-${i}`}
                className="mb-2"
                style={{
                  width: `${40 + i * 8}px`,
                  height: `${20 + i * 4}px`,
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(168, 85, 247, 0.4))",
                  borderRadius: "50%",
                  filter: "blur(1px)",
                }}
                animate={{
                  rotateY: [0, 180, 360],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div> */}
        </div>
      </section>
      {/* Satisfied Partners */}
      <div className="bg-[#0F0F0F] py-10">
        <p className="text-center text-[#999999] mb-10">Satisfied partners</p>
        <div className="flex items-center justify-center gap-8 flex-wrap px-4">
          {[
            images.logoIpsum,
            images.manilla,
            images.kpa,
            images.logoIpsum2,
            images.logoIpsum2,
          ].map((img, i) => (
            <Image
              width={134}
              key={i}
              src={img}
              className="object-contain"
              alt="logo"
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-[1160px] flex flex-col mx-auto">
          <GradientButton
            radius="12px"
            rootClassName="self-center mb-6"
            className="px-[58px] py-4"
          >
            Learn about Us
          </GradientButton>

          <div className="relative mb-[104px] rounded-xl p-3">
            <span
              style={{
                background: "linear-gradient(90deg, #03013A 0%, #72AFD3 100%)",
              }}
              className="w-[120px] animate-pulse blur-xl z-[11] absolute -top-3 left-0 h-[150px] rounded-full"
            />
            <span
              style={{
                background: "linear-gradient(90deg, #03013A 0%, #9AD372 100%)",
              }}
              className="w-20 animate-pulse blur-xl z-[11] absolute top-40 -right-3 h-[99px] rounded-full"
            />
            <div className="absolute inset-0 border-gradient rounded-3xl animate-border-spin" />
            <div className="bg-black/70 py-6 px-5 z-10 relative rounded-xl">
              <div className="flex max-w-[244px] mx-auto text-center items-center gap-4 mb-6">
                <div className="w-8 h-8 flex justify-end items-end p-[2px] rounded-full bg-[#C49A49]">
                  <div className="w-6 h-6 rounded-full bg-[#282828]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold">
                  Who We Are
                </h2>
              </div>

              <p className="text-[#E5E5E5] text-center font-medium text-base md:text-xl leading-relaxed">
                Pipn is the first social networking platform built for traders,
                investors, and financial communities. We&apos;re creating a space
                where traders can share strategies, connect globally, and
                monetize their influence.
              </p>

              <div className="mt-8">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-8 h-8 flex justify-end items-end p-[2px] rounded-full bg-[#1276A7]">
                    <div className="w-6 h-6 rounded-full bg-[#282828]" />
                  </div>
                  <h3 className="text-2xl font-extrabold">Why PiPN?</h3>
                </div>

                <div className="space-y-2">
                  {[
                    {
                      title: "Built for Traders",
                      desc: "Unlike other platforms, Pipn is designed with trading at its core. No noise, just pure trading insights.",
                    },
                    {
                      title: "Real Connections",
                      desc: "Network with Forex, Crypto, and Stock traders worldwide.",
                    },
                    {
                      title: "Earn & Share",
                      desc: "Showcase your strategies, build followers, and monetize your trading influence.",
                    },
                    {
                      title: "Trust & Transparency",
                      desc: "Your trading community, free from scams and clutter.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-lg"
                    >
                      <div className="flex p-6 rounded-lg items-start bg-[#E2E2E20F] gap-4">
                        <span className="p-[9px] rounded bg-[#282828] flex items-center justify-center">
                          <Dollar />
                        </span>
                        <div className="flex flex-col gap-2">
                          <h4 className="font-bold">{item.title}</h4>
                          <p className="text-[#8A8A8A] text-lg">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <GradientButton
            radius="12px"
            rootClassName="self-center mb-[56px]"
            className="px-[58px] py-4"
          >
            Mission & Vision
          </GradientButton>

          <Image src={images.mission} alt="Mission and vision" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4">
        <div className="max-w-6xl flex flex-col mx-auto">
          <GradientButton
            radius="12px"
            rootClassName="self-center mb-11"
            className="px-[58px] py-4"
          >
            Product Details
          </GradientButton>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-transparent bg-center mx-auto font-potta bg-clip-text bg-contain font-bold text-center mb-16"
            style={{
              backgroundImage: `url(${images.gradientBg.src})`,
            }}
          >
            PiPn Features
          </motion.h2>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid gap-5  max-[1168px]:grid-cols-[1fr_20%_1fr] grid-cols-[1fr_30%_1fr] items-center mb-16"
          >
            <div className="flex flex-col justify-between h-[90%]">
              {[
                {
                  title: "Trading Communities",
                  desc: "Forex, Crypto & Stock groups.",
                  className: "max-[868px]:right-[-10%] right-[-15%]",
                },
                {
                  title: "Leaderboards",
                  desc: "Transparent performance rankings.",
                },
                {
                  title: "Monetization Tools",
                  desc: "Earn from your content & influence.",
                  className:
                    "right-[-15%] max-[868px]:right-[-10%] max-[853px]:bottom-0 max-sm:bottom-[-2%] bottom-[10%]",
                },
              ].map(({ title, desc, className }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`relative w-full max-[868px]:ml-auto max-[868px]:w-fit max-w-[428px] text-center rounded-lg md:rounded-3xl p-1 ${className}`}
                >
                  <div className="absolute inset-0 border-gradient rounded-lg md:rounded-3xl animate-border-spin" />
                  <div className="bg-black/70 max-[1230px]:px-5 max-[853px]:px-2 flex items-center flex-col max-[1168px]:py-2 py-5 z-10 relative rounded-lg md:rounded-3xl">
                    <h3 className="max-[1168px]:text-base max-sm:text-[10px] max-md:text-sm text-2xl font-medium mb-2">
                      {title}
                    </h3>
                    <p className="text-xl whitespace-nowrap max-sm:text-[6px] max-md:text-xs max-[1168px]:text-sm text-[#8A8A8A]">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Image
              src={images.appPreview}
              alt="App preview"
              className="w-full max-sm:min-w-[150px] h-auto object-contain"
            />
            <div className="flex flex-col justify-between h-[90%]">
              {[
                {
                  title: "Strategy Sharing",
                  desc: "Charts, setups & analysis.",
                  className: "top-[5%] max-[853px]:top-0",
                },
                {
                  title: "Instant Conversations",
                  desc: "Chat, comment & grow.",
                  className: "top-[5%] max-[853px]:top-0 right-[12%]",
                },
                {
                  title: "Web3-Ready",
                  desc: "Tokenized incentives, swaps & more.",
                  className: "bottom-[5%] max-sm:bottom-0",
                },
              ].map(({ title, desc, className }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`relative w-full max-[868px]:w-fit max-w-[428px] rounded-lg md:rounded-3xl p-1 ${className}`}
                >
                  <div className="absolute inset-0 border-gradient rounded-lg md:rounded-3xl animate-border-spin" />
                  <div className="bg-black/70 max-[1230px]:px-5 max-[853px]:px-2 text-center flex items-center flex-col max-[1168px]:py-2 py-5 z-10 relative rounded-lg md:rounded-3xl">
                    <h3 className="max-[1168px]:text-base max-sm:text-[10px] max-md:text-sm text-2xl font-medium mb-2">
                      {title}
                    </h3>
                    <p className="text-xl whitespace-nowrap max-sm:text-[6px] max-[1168px]:text-sm max-md:text-xs text-[#8A8A8A]">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Section */}
      <section id="application" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-bold text-center mb-2"
          >
            Applications
          </motion.h2>

          <p className="text-center md:text-2xl text-[#8A8A8A] mb-16">
            PIPN has real-time utility and exciting rewards
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#E2E2E20A] border border-[#232323] rounded-[48px] p-4 pb-20"
            >
              <GradientButton
                rootClassName="mb-6 rounded-[32px] py-[3px] px-[22px] w-full"
                className="text-2xl rounded-3xl font-bold px-4 w-full py-[22px]"
              >
                For Traders
              </GradientButton>

              <p className="text-xl mb-8">
                Pipn is more than social media. It&apos;s:
              </p>

              <div className="space-y-6">
                {[
                  "A place to learn and improve",
                  "A hub to connect with like-minded traders",
                  "A platform where your skills are rewarded",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-6 h-6 flex justify-end items-end p-[2px] rounded-full bg-[#227374]">
                      <div className="w-4 h-4 rounded-full bg-[#282828]" />
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#E2E2E20A] border border-[#232323] rounded-[48px] p-4 pb-20"
            >
              <GradientButton
                rootClassName="mb-6 rounded-[32px] py-[3px] px-[22px] w-full"
                className="text-2xl rounded-3xl font-bold px-4 w-full py-[22px]"
              >
                Monetization
              </GradientButton>

              <p className="text-xl mb-8">
                Pipn rewards users for participation:
              </p>

              <div className="space-y-6">
                {[
                  "Creator Earnings - Monetize your followers.",
                  "Performance Rewards - Recognition for top traders.",
                  "Referral Incentives - Earn when you invite others.",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-6 h-6 flex justify-end items-end p-[2px] rounded-full bg-[#737ED0]">
                      <div className="w-4 h-4 rounded-full bg-[#282828]" />
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section
        id="waitlist"
        className="relative flex flex-col gap-14 py-20 px-4"
      >
        <GradientButton
          radius="12px"
          rootClassName="self-center mb-6"
          className="px-[58px] py-4"
        >
          Product Details
        </GradientButton>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-[1034px] w-full mx-auto mb-[104px] rounded-xl p-3"
        >
          <div className="absolute inset-0 border-gradient rounded-3xl animate-border-spin" />
          <div className="bg-black/70 py-6 px-5 z-10 relative rounded-xl">
            <div className="mt-20">
              <div className="max-w-[659px] mx-auto w-full">
                <h2 className="md:text-3xl text-xl font-bold text-center mb-4">
                  Have questions or want to partner with us?
                </h2>

                <h3
                  style={{
                    backgroundImage:
                      "linear-gradient(274.05deg, #FBCF21 -37.86%, #AA7414 125.4%)",
                  }}
                  className="text-3xl md:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent"
                >
                  JOIN OUR WAITLIST
                </h3>

                <p className="text-center text-[#9E9E9E] mb-8">
                  Be Among the First 5,000 Traders
                  <br />
                  Don&apos;t miss your chance to be part of Pipn from day one.
                </p>

                <div className="bg-[#E2E2E205] border border-[#232323] rounded-2xl pb-8 mb-12">
                  <div className="w-[75px] h-[75px] bg-black/70 flex mb-3 -mt-10 mx-auto items-center justify-center rounded-full border-2 border-[#232323]">
                    <Image
                      src={images.medal}
                      alt="Medal"
                      width={44}
                      height={51}
                    />
                  </div>

                  <p className="text-center text-lg text-[#9E9E9E] mb-4">
                    Early adopters get exclusive perks:
                  </p>

                  <div className="space-y-2 w-fit mx-auto">
                    {[
                      "Founding Trader Badge",
                      "Early access to Pipn app",
                      "Priority features & rewards",
                    ].map((perk, i) => (
                      <div
                        key={i}
                        className="text-[#616161] text-lg flex items-center gap-1 text-center"
                      >
                        <Star />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-[#616161] text-xl font-semibold self-center md:text-3xl">
                  Contact Form
                </h5>
                <div className="space-y-6 w-full">
                  <div>
                    <label className="block text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Business Email</label>
                    <input
                      type="email"
                      placeholder="Enter your business email"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">
                      Request Content
                    </label>
                    <textarea
                      placeholder="How we can help you"
                      rows={4}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <p className="text-[#868686]">
                    By submitting your email address, you agree to receive
                    occasional marketing messages from PIPN, from which you can
                    unsubscribe at any time. For more information please see our
                    privacy policy.
                  </p>

                  <GradientButton
                    animation={{
                      whileHover: { scale: 1.01 },
                      whileTap: { scale: 0.98 },
                    }}
                    radius="8px"
                    className="w-full py-4 font-bold text-lg"
                    rootClassName="w-full"
                  >
                    Join Waitlist
                  </GradientButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border border-[#232323] rounded-lg bg-[#FFFFFF0D] mx-4 mb-4 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <Logo className="w-[127px] h-[60px]" />

            <div className="flex flex-wrap items-center justify-center gap-6">
              <button
                onClick={() => scrollToSection("features")}
                className="text-white cursor-pointer transition-colors"
              >
                Product Features
              </button>
              <button
                onClick={() => scrollToSection("application")}
                className="text-white cursor-pointer transition-colors"
              >
                Application
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white cursor-pointer transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("waitlist")}
                className="text-white cursor-pointer transition-colors"
              >
                Waitlist
              </button>
            </div>

            <div className="flex items-center gap-4">
              <motion.a whileHover={{ scale: 1.1 }} href="#">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.439 5.47522L19.2703 20.419C19.0312 21.4737 18.4078 21.7362 17.5218 21.2393L12.6937 17.6815L10.364 19.9221C10.1062 20.1799 9.89059 20.3955 9.39372 20.3955L9.74059 15.4783L18.689 7.39241C19.0781 7.04554 18.6047 6.85335 18.0843 7.20022L7.02184 14.1658L2.25934 12.6752C1.2234 12.3518 1.20465 11.6393 2.47497 11.1424L21.1031 3.96585C21.9656 3.64241 22.7203 4.15804 22.439 5.47522Z"
                    fill="white"
                  />
                </svg>
              </motion.a>

              <motion.a whileHover={{ scale: 1.1 }} href="#">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.35195 7.52383C3.38008 7.24727 3.27227 6.9707 3.06602 6.7832L0.951953 4.2332V3.85352H7.52383L12.6051 14.9957L17.0723 3.85352H23.3395V4.2332L21.5301 5.96758C21.3754 6.08477 21.2957 6.28164 21.3285 6.47383V19.2238C21.2957 19.416 21.3754 19.6129 21.5301 19.7301L23.2973 21.4645V21.8441H14.4051V21.4645L16.2379 19.6879C16.416 19.5098 16.416 19.4535 16.416 19.1816V8.87852L11.3207 21.8113H10.6316L4.70664 8.87852V17.5457C4.65508 17.9113 4.77695 18.277 5.03477 18.5395L7.41602 21.427V21.8066H0.666016V21.4316L3.04727 18.5395C3.30039 18.277 3.41758 17.9066 3.35195 17.5457V7.52383Z"
                    fill="white"
                  />
                </svg>
              </motion.a>

              <motion.a whileHover={{ scale: 1.1 }} href="#">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0001 9.72931C10.2798 9.72931 8.87589 11.1332 8.87589 12.8535C8.87589 14.5738 10.2798 15.9777 12.0001 15.9777C13.7204 15.9777 15.1243 14.5738 15.1243 12.8535C15.1243 11.1332 13.7204 9.72931 12.0001 9.72931ZM21.3704 12.8535C21.3704 11.5598 21.3821 10.2777 21.3095 8.98634C21.2368 7.48634 20.8946 6.15509 19.7978 5.05822C18.6985 3.959 17.3696 3.61915 15.8696 3.5465C14.5759 3.47384 13.2939 3.48556 12.0025 3.48556C10.7087 3.48556 9.42667 3.47384 8.13527 3.5465C6.63527 3.61915 5.30402 3.96134 4.20714 5.05822C3.10792 6.15744 2.76808 7.48634 2.69542 8.98634C2.62277 10.2801 2.63449 11.5621 2.63449 12.8535C2.63449 14.1449 2.62277 15.4293 2.69542 16.7207C2.76808 18.2207 3.11027 19.552 4.20714 20.6488C5.30636 21.7481 6.63527 22.0879 8.13527 22.1606C9.42902 22.2332 10.711 22.2215 12.0025 22.2215C13.2962 22.2215 14.5782 22.2332 15.8696 22.1606C17.3696 22.0879 18.7009 21.7457 19.7978 20.6488C20.897 19.5496 21.2368 18.2207 21.3095 16.7207C21.3845 15.4293 21.3704 14.1473 21.3704 12.8535ZM12.0001 17.6606C9.33995 17.6606 7.19308 15.5137 7.19308 12.8535C7.19308 10.1934 9.33995 8.0465 12.0001 8.0465C14.6603 8.0465 16.8071 10.1934 16.8071 12.8535C16.8071 15.5137 14.6603 17.6606 12.0001 17.6606ZM17.004 8.97228C16.3829 8.97228 15.8814 8.47072 15.8814 7.84962C15.8814 7.22853 16.3829 6.72697 17.004 6.72697C17.6251 6.72697 18.1267 7.22853 18.1267 7.84962C18.1269 7.9971 18.0979 8.14317 18.0416 8.27946C17.9852 8.41575 17.9026 8.53959 17.7983 8.64387C17.694 8.74816 17.5701 8.83085 17.4339 8.8872C17.2976 8.94355 17.1515 8.97246 17.004 8.97228Z"
                    fill="white"
                  />
                </svg>
              </motion.a>

              <motion.a whileHover={{ scale: 1.1 }} href="#">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.75 1.79102H18.8175L12.1175 9.46852L20 19.916H13.8287L8.995 13.5785L3.46375 19.916H0.395L7.56125 11.7035L0 1.79102H6.32875L10.6975 7.58227L15.75 1.79102ZM14.675 18.076H16.375L5.40375 3.53477H3.58125L14.675 18.076Z"
                    fill="white"
                  />
                </svg>
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_3504)">
                    <path
                      d="M6.20062 21.8535H1.84688V7.83322H6.20062V21.8535ZM4.02141 5.92072C2.62922 5.92072 1.5 4.7676 1.5 3.37541C1.5 2.70669 1.76565 2.06536 2.2385 1.59251C2.71136 1.11965 3.35269 0.854004 4.02141 0.854004C4.69012 0.854004 5.33145 1.11965 5.80431 1.59251C6.27716 2.06536 6.54281 2.70669 6.54281 3.37541C6.54281 4.7676 5.41313 5.92072 4.02141 5.92072ZM22.4953 21.8535H18.1509V15.0285C18.1509 13.402 18.1181 11.316 15.8873 11.316C13.6237 11.316 13.2769 13.0832 13.2769 14.9113V21.8535H8.92781V7.83322H13.1034V9.74572H13.1644C13.7456 8.64416 15.1655 7.48166 17.2838 7.48166C21.69 7.48166 22.5 10.3832 22.5 14.152V21.8535H22.4953Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3504">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.853516)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </motion.a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <p className="text-white text-sm">©pipn 2025</p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PipnLandingPage;
