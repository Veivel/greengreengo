import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import { CgArrowLeft, CgMenuLeft } from "react-icons/cg";

export const DocumentModule = () => {
  const router = useRouter()
  const filename = router.query.slug as string[];
  const [data, setData] = useState<any>(undefined);

  useEffect(() => {
    if (!data && router.isReady) {
      const prom = axios.get(
        `https://ir.veivelp.com/retrieve/detail?doc=${filename.join("/")}`
      )
      prom.then((res) => {
        setData(res.data)
        console.log(res.data)
        return
      })
    }
  }, [data, filename, router])

  return (
    <>
      { data && <div className="flex flex-col px-24 py-8">
        <button className="flex items-center" onClick={() => {router.back()}}>
          <CgArrowLeft color="gray" />
          <p className="text-gray-600 hover:underline">Back</p>
        </button>
        <h2 className="mb-4 text-3xl text-center">{data.title}</h2>
        <p className="text-sm font-light">{data.content}</p>
      </div> }
    </>
  )
}