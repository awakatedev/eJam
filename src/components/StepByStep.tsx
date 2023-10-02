import { CheckCircleIcon } from "@heroicons/react/24/solid";

const steps = [
  {
    step: "Step 1 :",
    title: " Cart Review",
    icon: <CheckCircleIcon className="h-10 w-10 text-Green" />,
  },
  {
    step: "Step 2 :",
    title: "Checkout",
    icon: <CheckCircleIcon className="h-10 w-10 text-Green" />,
  },
  {
    step: "Step 3 :",
    title: " Special Offer",
    icon: (
      <span className="h-8 w-8 bg-Blue text-Base rounded-full flex items-center justify-center">
        3
      </span>
    ),
  },
  {
    step: "Step 4 :",
    title: "Confirmation",
    icon: (
      <span className="h-8 w-8 bg-Base text-Blue border border-1 border-Blue rounded-full flex items-center justify-center">
        4
      </span>
    ),
  },
];

const StepByStep = () => {
  return (
    <>
      <section className="md:h-20 h-20 w-full  p-5 flex md:flex-row flex-col justify-between items-center">
        <div className="h-14 w-full md:py-10 md:px-28 py-10 flex flex-row justify-between items-center font-baseFont font-regular text-Title md:text-xl text-sm">
          {steps.map((item) => (
            <>
              <div className="flex text-center items-center gap-3 md:flex-row flex-col">
                {item.icon}
                <span className="md:block hidden">{item.step}</span>
                <span className="">{item.title}</span>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
export default StepByStep;
