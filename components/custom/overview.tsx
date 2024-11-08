import { motion } from 'framer-motion';
import { LineChart, MessageSquare, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <Image
            src="/images/astra.png"
            alt="Goastra"
            width={250}
            height={32}
          />
        </p>
        <p className="flex flex-row justify-center gap-4 items-center">
          <MessageSquare size={32} />
          <span>+</span>
          <LineChart size={32} />
          <span>+</span>
          <TrendingUp size={32} />
        </p>
        <p>
          Welcome to GoastraPRO, your advanced marketing and business
          intelligence assistant created by{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://goastra.co/"
            target="_blank"
          >
            Goastra
          </Link>
          . I&apos;m specialized in digital marketing strategies, market
          analysis, and business optimization.
        </p>
        <p>
          I can help you with SEO strategies, content marketing, social media
          campaigns, market research, competitor analysis, and much more. Just
          ask me anything related to digital marketing and business growth!
        </p>
        <p className="text-sm text-muted-foreground">
          Powered by Goastra&apos;s advanced AI technology for marketing
          intelligence
        </p>
      </div>
    </motion.div>
  );
};
