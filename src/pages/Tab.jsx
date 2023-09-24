import  {  useState } from "react"

const tabButtonsColumns = [{ label: "Mobile Money" }, { label: "Bulk Payments" }, { label: "CSV Upload" }, { label: "Bank Transfer" }]

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [step, setStep] = useState(1)

  return (
    <div className="px-8 md:px-20 lg:px-26">
      <h2 className="font-bold text-xl mb-2">Tab</h2>
      <div className="">
        {tabButtonsColumns.map((button, index) => {
          return (
            <button
              className={`py-2 px-5 rounded-t-lg hover:bg-slate-100 ${activeTab === index ? `bg-slate-600 text-white hover:bg-slate-600` : ""} `}
              key={index}
              onClick={() => {
                setActiveTab(index)
              }}
            >
              {button.label}
            </button>
          )
        })}
      </div>
      <div className="content bg-gray-200/90 min-h-[300px] pt-5 pl-5 relative">
        {activeTab === 0 && (
          <>
            {step === 1 ? (
              <div>
                <h2 className="font-bold">Mobile Money Step One</h2>
                <button
                  className="text-white font-medium bg-slate-600 py-1 px-5 rounded"
                  onClick={() => {
                    setStep((prev) => prev + 1)
                  }}
                >
                  Next
                </button>
              </div>
            ) : (
              <div className="">
                <h2 className="font-bold">Mobile Money Step Two</h2>
                <button
                  className="text-white font-medium bg-slate-600 py-1 px-5 rounded"
                  onClick={() => {
                    setStep((prev) => prev - 1)
                  }}
                >
                  Prev
                </button>
              </div>
            )}
          </>
        )}
        {activeTab === 1 && <div className="font-bold">Bulk Payments</div>}
        {activeTab === 2 && <div className="font-bold">CSV Upload</div>}
        {activeTab === 3 && <div className="font-bold">Bank Transfer</div>}
      </div>
    </div>
  )
}

export default Tab
