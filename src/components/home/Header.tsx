import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const [toggleSide, setToggleSide] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 w-full bg-ink-950/95 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/entacrest_logo.png"
            alt="Entacrest"
            width={160}
            height={48}
            className="w-[140px] md:w-[160px] h-auto invert brightness-125"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <HeaderNav onClick={() => setToggleSide(false)} />
          <Button
            title="Start a Project"
            onClick={() => navigate("/contact")}
            className="w-auto px-5 py-2.5 text-sm"
          />
        </div>
        <div className="md:hidden flex items-center text-white">
          <Menu className="cursor-pointer" onClick={() => setToggleSide(true)} />
        </div>
      </div>

      <AnimatePresence>
        {toggleSide && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-40 bg-black/60"
              onClick={() => setToggleSide(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="md:hidden fixed right-0 top-0 w-9/10 max-w-[280px] z-50 bg-ink-900 border-l border-white/10 p-6 h-full"
            >
              <X
                className="cursor-pointer mb-8 text-white"
                onClick={() => setToggleSide(false)}
              />
              <HeaderNav onClick={() => setToggleSide(false)} />
              <Button
                title="Start a Project"
                onClick={() => {
                  setToggleSide(false);
                  navigate("/contact");
                }}
                className="mt-8 w-full py-3"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
