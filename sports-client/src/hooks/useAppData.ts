import { useState } from "react"
import type { Person } from "../models/person"
import type { Sports } from "../models/sports"

export const useAppData = () => {
    const [person] = useState<Person>({ name: "Mario", age: 10, dob: new Date("1/1/2016") })
    const [sports] = useState<Sports[]>([
        { id: 1, name: "Swimming" },
        { id: 2, name: "Biking" },
        { id: 3, name: "Running" },
    ])

    return { person, sports }
}
