import { yupResolver } from "@hookform/resolvers/yup"
import { useFieldArray, useForm } from "react-hook-form"
import { firstSchema } from "../utlils/schemas"
import { useState } from "react"

const HookForm = () => {
  const [revalidate, setRevalidate] = useState(false)
  const [val, setVal] = useState("")
  const [images, setImages] = useState([])

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    control,
    clearErrors,
    trigger,
    getFieldState,

    formState: { errors, isLoading, isSubmitted, validatingFields },
  } = useForm({
    resolver: yupResolver(firstSchema),
    defaultValues: async () => {
      return { ...firstSchema.getDefault() }
    },
    // reValidateMode: "onChange",
  })

  console.log({ ...firstSchema.getDefault() })

  const files = watch("files")

  const { fields, append, remove } = useFieldArray({ name: "suppliers", control: control })
  const { fields: fileFields, append: add, remove: rm } = useFieldArray({ name: "files", control: control })
  const { fields: providers, append: appendProvider, remove: removeProvider } = useFieldArray({ name: "providers", control: control })

  const onSubmit = handleSubmit((payload) => {
    console.log("🚀 || file: HookForm.jsx:9 || payload:", payload)
  })
  return (
    <div>
      <p> validatingFields - {JSON.stringify(validatingFields)}</p>
      <h1 className="text-center">React Hook Form</h1>
      <div className="flex gap-2">
        <button className="bg-gray-300 rounded p-2" onClick={() => console.log(getValues())}>
          get values
        </button>
        <button className="bg-gray-300 rounded p-2" onClick={() => console.log(errors)}>
          get Errors
        </button>
        <button
          className="bg-gray-300 rounded p-2"
          onClick={() => {
            trigger()
          }}
        >
          trigger Errors
        </button>
        <button className="bg-gray-300 rounded p-2" onClick={() => console.log(getFieldState("name"))}>
          getFieldState
        </button>
        ===================================
        <button className="bg-gray-300 rounded p-2" onClick={() => console.log(firstSchema.defined())}>
          schema default
        </button>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <div className="">
          <input type="text" className="border p-2" {...register("name")} placeholder="name" />
          {errors?.name?.message && <p className="text-red-700">{errors?.name?.message}</p>}
        </div>
        <div className="">
          <input className="border p-2" type="text" {...register("age")} placeholder="age" />
          {errors?.age?.message && <p className="text-red-700">{errors?.age?.message}</p>}
        </div>
        <div className="">
          <input
            type="text"
            className="border p-2"
            {...register("email", {
              //manually revalidate on change when you manually trigger the validation
              onChange: () => {
                trigger("email")
              },
            })}
          />
          {errors?.email?.message && <p className="text-red-700">{errors?.email?.message}</p>}
        </div>
        <div className="">
          <input
            type="file"
            /* {...register("files")} */ id=""
            multiple
            onChange={(e) => {
              Array.from(e.target.files).forEach((file) => {
                // setImages((prev) => [...prev, file])
                add(file)
              })
            }}
          />
          {/* {Array.from(files)?.map((file, i) => (
            <img key={i} src={URL.createObjectURL(file)} alt="" />
          ))} */}
          {/* {images?.map((file, i) => (
            <img key={i} src={URL.createObjectURL(file)} alt="" />
          ))} */}
          {files?.map((file, i) => (
            <div key={i} className="">
              <img src={URL.createObjectURL(file)} alt="" />
              <button onClick={() => rm(i)}>remove</button>
            </div>
          ))}
          {/* <p className="border border-red-500">{getValues("files")}</p> */}
          {/* {errors?.files?.message && <p className="text-red-700">{errors?.files?.message}</p>} */}
        </div>
        {/* {providers?.map((element, i) => {
          return (
            <div key={i}>
              <div className="flex gap-2">
                <input type="text" {...register(`providers.${i}.supplier.name`)} />
                <input type="text" {...register(`providers.${i}.supplier.age`)} />
              </div>
            </div>
          )
        })} */}
        {/* <button
          onClick={(e) => {
            e.preventDefault()
            appendProvider({ provider: { name: "", age: "" } })
          }}
          className="border p-2"
        >
          Add new nested provider
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            append({ name: "", contact: "" })
          }}
          className="border p-2"
        >
          Add new supplier
        </button> */}
        <button className="bg-green-200 p-2">Submit</button>
      </form>
    </div>
  )
}
export default HookForm
