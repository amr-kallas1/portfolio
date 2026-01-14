import { Link } from "@/components/ui/link";
import { ReactNode } from "react";

export type Experience = {
  title: ReactNode;
  company: ReactNode;
  location?: ReactNode;
  from: string | null;
  to: string | null;
  noDuration?: boolean;
  description: ReactNode;
};
export const EXPERIENCES: Experience[] = [
  {
    title: "CS Student",
    company: (
      <Link target="_blank" href="https://www.alepuniv.edu.sy/">
        University Of Aleppo
      </Link>
    ),
    location: "Aleppo, Syria",
    from: null,
    to: null,
    noDuration: true,
    description: (
      <>
        <p>{`Currently in my senior year`}</p>
        <p className="pt-1">
          {
            "I've got equipped with a wide range of knowledge covering: algorithms, data structure, software engineering mythologies, and more"
          }
        </p>
        <p className="pt-1">
          {
            "as I took more software engineering courses I've done my 4th year project: "
          }
          <Link target="_blank" href="https://github.com/amr-kallas/uBay">
            uBay
          </Link>
          {` which is a social media platform for selling and buying second-hand items.`}
        </p>
      </>
    ),
  },
  {
    title: "Front-end Developer",
    company: (
      <Link target="_blank" href="https://www.linkedin.com/company/ulutechsy/">
        Ulutech
      </Link>
    ),
    location: "Aleppo, Syria",
    from: "2024-3",
    to: "2024-12",
    description: (
      <>
        <h1 className="text-4xl">Humy</h1>
        <p className="mt-2">
          I have had the opportunity to work with a great team on a huge
          project, which was a food delivery service called HumyApp. I worked in
          the front-end team were we built the admin dashboard and pioneer
          dashboard.
        </p>
        <p className="mb-2 pt-1">
          Our work was mainly crafting complex forms and CRUD operations to
          manage all of the three applications (customer, driver, pioneer) such
          as reviewing new drivers and posting customized notifications. The
          dashboard also has a permission-based authorization system.
        </p>
        <h1 className="text-4xl" style={{ marginTop: "12px" }}>
          Automatically
        </h1>
        <p className="mt-2">
          I built a Dashboard that performs CRUD operations , the dashboard
          contains students, subjects, exams, and classes. Any school owner,
          institute, or university can use it. The main purpose of this is to
          correct automated exam templates by entering documents into an
          external scanner.
        </p>
        <h1 className="text-4xl" style={{ marginTop: "12px" }}>
          Butterfly
        </h1>
        <p className="mt-2">
          butterfly is a learning management system, where I developed the admin
          dashboard: - CRUD operations to manage the platform resources with an
          intuitive UI - Real-time support chat
        </p>
        <h1 className="text-4xl" style={{ marginTop: "12px" }}>
          FID Resturant
        </h1>
        <p className="mt-2">
          i have built the dashboard with modern technologies, offering a wide
          range of features tailored to meet the needs of both customers and
          restaurant owners. The platform encompasses various modules, including
          CRUD operations, Firebase notifications, orders, categories, coupons,
          permissions, and store management.
        </p>
      </>
    ),
  },
  {
    title: "Front-end Developer",
    company: (
      <Link target="_blank" href="">
        Nova plattine
      </Link>
    ),
    location: "Turkey",
    from: "2025-10",
    to: null,
    description: (
      <>
        <p className="mt-2">
          Worked as a Front-end Developer contributing to the design and
          implementation of scalable, user-friendly web applications.
          Collaborated closely with designers, backend developers, and product
          teams to translate requirements into high-quality interfaces.
        </p>

        <p className="mt-2">
          Built and maintained complex dashboards featuring dynamic forms, CRUD
          operations, and role-based access control. Focused on creating
          reusable components, improving performance, and ensuring clean,
          maintainable code.
        </p>

        <p className="mt-2">
          Emphasized responsive design, accessibility, and modern UI/UX
          practices while working with contemporary front-end technologies.
          Actively participated in code reviews, debugging, and continuous
          improvement of the development workflow.
        </p>
      </>
    ),
  },
];
