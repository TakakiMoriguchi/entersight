import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js"
import { Radar } from "react-chartjs-2"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

import { Box } from "@chakra-ui/react"

export default function WorksChart({ props }) {
  // カテゴリーごとの数を配列で返す
  const getCategoriesLength = () => {
    let designLength = 0
    let programLength = 0
    let analysisLength = 0
    let photographLength = 0
    let consultantLength = 0
    let othersLength = 0
    let catData = []
    props.map((data) => {
      switch (data.category.toString()) {
        case "Design":
          designLength++
          break
        case "Program (System)":
          programLength++
          break
        case "Analysis":
          analysisLength++
          break
        case "Photograph":
          photographLength++
          break
        case "Consultant":
          consultantLength++
          break
        case "Others":
          othersLength++
          break
        default:
          console.log("データ該当なし")
      }
    })
    catData.push(
      designLength,
      programLength,
      analysisLength,
      photographLength,
      consultantLength,
      othersLength
    )
    return catData
  }

  const data = {
    labels: [
      "Design",
      "Program (System)",
      "Analysis",
      "Photograph",
      "Consultant",
      "Others",
    ],
    datasets: [
      {
        label: "Categories",
        data: getCategoriesLength(),
        backgroundColor: "#90cdf4",
        borderColor: "#1a202c",
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltipItems: [
      "Design",
      "Program (System)",
      "Analysis",
      "Photograph",
      "Consultant",
      "Others",
    ],
  }

  return (
    <>
      <Box p={2} w='100%' bg={"white"} borderRadius={6}>
        <Radar options={options} data={data} />
      </Box>
    </>
  )
}
