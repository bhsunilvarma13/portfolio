import Link from "next/link";

const CTASection = () => {
  return (
    <section className="w-full px-4 py-6 sm:px-6">
      <h1 className="text-4xl font-bold text-center tracking-tight">
        Want to work with me?
      </h1>
      <div className="flex items-center justify-center my-8">
        <Link href={"mailto:bhsunilvarma13@gmail.com"}>
          <span className="bg-orange-600 py-4 px-8 rounded-xl font-medium">
            Contact Me
          </span>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
