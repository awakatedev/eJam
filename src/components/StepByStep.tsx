

const steps = [
  {
    step: "Step 1 :",
    title: " Cart Review",
    icon: "",
    status: "green",
  },
  {
    step: "Step 2 :",
    title: "Checkout",
    icon: "green",
  },
  {
    step: "Step 3 :",
    title: " Special Offer",
    icon: "blue",
  },
  {
    step: "Step 4 :",
    title: "Confirmation",
    icon: "none",
  },
];


const StepByStep = () => {
  return (
    <>
      <section className="md:h-20 h-20 w-full  p-5 flex md:flex-row flex-col justify-between items-center">
        <div className="h-14 w-full md:py-10 md:px-28 py-10 flex flex-row justify-between items-center font-baseFont font-regular text-Title md:text-xl text-sm">
          {steps.map((item) => (
            <>
              <div className="flex text-center">
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
