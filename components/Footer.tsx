import { NewsletterForm } from "@/components/NewsletterForm";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";
export type FooterProps = {};
export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="grid grid-cols-1 justify-center gap-10 p-5 text-xl md:p-20 lg:grid-cols-3 lg:gap-0">
      <div className="flex flex-col gap-4">
        <h5 className="text-3xl font-semibold">Amr Kallas</h5>
        <nav>
          <ul className="flex flex-col gap-4 ps-4">
            <li>
              <Link href={"/"} className="underline">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/projects"} className="underline">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="order-1 md:order-none">
        <div className="xs:gap-2 flex flex-row flex-wrap items-start justify-center text-xl lg:mt-0">
          <FooterLink
            href={"https://github.com/amr-kallas"}
            gradientProps={{ className: "from-purple-800 to-purple-600" }}
          >
            <Github aria-label="GitHub" />
          </FooterLink>
          <FooterLink
            gradientProps={{ className: "from-blue-900 to-blue-600" }}
            href={"https://www.linkedin.com/in/amr-kallas-225a4724a/"}
          >
            <Linkedin aria-label="LinkedIn" />
          </FooterLink>
          <FooterLink
            href={"mailto:amrkallas1@gmail.com"}
            gradientProps={{ className: "from-red-700 to-orange-500" }}
          >
            <Mail aria-label="Email" />
          </FooterLink>
          <FooterLink
            gradientProps={{ className: "from-blue-300 to-blue-600" }}
            href="https://x.com/AmrKallas?t=AQTdGQBBHb7mRQVoNiZFiw&s=35"
          >
            <svg
              width="396"
              aria-label="X/Twitter"
              height="396"
              viewBox="0 0 396 396"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M301.026 37.125H355.608L236.362 173.415L376.645 358.875H266.805L180.774 246.395L82.335 358.875H27.72L155.265 213.098L20.691 37.125H133.32L211.084 139.937L301.026 37.125ZM281.869 326.205H312.114L116.886 68.079H84.4305L281.869 326.205Z"
                fill="white"
              />
            </svg>
          </FooterLink>
          <FooterLink
            href={"https://t.me/Amr_Kallas"}
            gradientProps={{ className: "from-purple-800 to-blue-600" }}
          >
            <Send aria-label="Telegram" className="pr-1 pt-[2px]" />
          </FooterLink>
        </div>
      </div>
    </footer>
  );
};

export type FooterLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  gradientProps: ComponentPropsWithoutRef<"div">;
};
export const FooterLink: FC<FooterLinkProps> = ({
  gradientProps,
  ...props
}) => {
  return (
    <Link
      {...props}
      className="relative h-10 w-10 overflow-hidden rounded-sm [&:hover>.gradient]:bg-gradient-to-l [&:hover>.gradient]:opacity-100"
    >
      <div
        className={cn(
          "gradient absolute -inset-3 animate-[spin_5s_ease-in-out_infinite] opacity-0 blur-sm transition-opacity",
          gradientProps.className,
        )}
      />
      <div className="absolute inset-0 z-10 m-1.5 flex [&>svg]:h-full [&>svg]:w-full">
        {props.children}
      </div>
    </Link>
  );
};
