import { useEffect, useState } from "react"

const steps = ["step 1", "step 2", "step 3"]
const FormStepper = () => {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <>
      <div>FormStepper</div>
      <div className="mt-10 ml-10 flex isolate">
        {steps.map((step, index) => {
          const isCompleted = currentStep > index + 1
          const isActive = currentStep === index + 1
          return (
            <div
              key={index}
              className={`step-wrapper ${isActive && "active"}  ${
                isActive && "active"
              } ${isCompleted && "completed"}`}
            >
              <p className="step-number">{index + 1}</p>
              <p>{step}</p>
            </div>
          )
        })}
      </div>
      <div className="flex justify-center mt-5">
        <button
          onClick={() => {
            if (currentStep > 1) {
              setCurrentStep((prev) => prev - 1)
            }
          }}
          className="bg-black text-white p-2 rounded mr-5"
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (currentStep < 3) {
              setCurrentStep((prev) => prev + 1)
            }
          }}
          className="bg-black text-white p-2 rounded mr-5"
        >
          Next
        </button>
      </div>
    </>
  )
}

export default FormStepper
