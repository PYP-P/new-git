"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Course {
  id: number;
  grade: string;
  credits: string;
}

export default function GPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, grade: "", credits: "" },
    { id: 2, grade: "", credits: "" },
    { id: 3, grade: "", credits: "" },
    { id: 4, grade: "", credits: "" },
  ]);
  const [gpa, setGpa] = useState<number | null>(null);

  const gradePoints: { [key: string]: number } = {
    "A+": 4.0, "A": 4.0, "A-": 3.7,
    "B+": 3.3, "B": 3.0, "B-": 2.7,
    "C+": 2.3, "C": 2.0, "C-": 1.7,
    "D+": 1.3, "D": 1.0, "D-": 0.7,
    "F": 0.0,
  };

  const addCourse = () => {
    setCourses([...courses, { id: Date.now(), grade: "", credits: "" }]);
  };

  const removeCourse = (id: number) => {
    if (courses.length > 1) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  const updateCourse = (id: number, field: "grade" | "credits", value: string) => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (const course of courses) {
      const credits = parseFloat(course.credits);
      const points = gradePoints[course.grade];

      if (!isNaN(credits) && points !== undefined) {
        totalPoints += points * credits;
        totalCredits += credits;
      }
    }

    if (totalCredits > 0) {
      setGpa(totalPoints / totalCredits);
    }
  };

  const reset = () => {
    setCourses([
      { id: 1, grade: "", credits: "" },
      { id: 2, grade: "", credits: "" },
      { id: 3, grade: "", credits: "" },
      { id: 4, grade: "", credits: "" },
    ]);
    setGpa(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/#calculators" className="hover:text-blue-600">Calculators</Link>
          <span className="mx-2">›</span>
          <span>GPA Calculator</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          GPA CALCULATOR
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="mb-6">
            <div className="grid grid-cols-3 gap-4 mb-4 font-semibold text-gray-700">
              <div>Course #</div>
              <div>Grade</div>
              <div>Credits</div>
            </div>

            {courses.map((course, index) => (
              <div key={course.id} className="grid grid-cols-3 gap-4 mb-3 items-center">
                <div className="text-gray-700">Course {index + 1}</div>
                <select
                  value={course.grade}
                  onChange={(e) => updateCourse(course.id, "grade", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  {Object.keys(gradePoints).map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={course.credits}
                    onChange={(e) => updateCourse(course.id, "credits", e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="3"
                    step="0.5"
                    min="0"
                  />
                  {courses.length > 1 && (
                    <button
                      onClick={() => removeCourse(course.id)}
                      className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mb-6">
            <button
              onClick={addCourse}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              Add Course
            </button>
            <button
              onClick={calculateGPA}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Calculate GPA
            </button>
            <button
              onClick={reset}
              className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Reset
            </button>
          </div>

          {gpa !== null && (
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900">
                Your GPA: {gpa.toFixed(2)}
              </h2>
            </div>
          )}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Grade Point Scale</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(gradePoints).map(([grade, points]) => (
              <div key={grade} className="flex justify-between p-3 bg-white rounded border border-gray-200">
                <span className="font-semibold">{grade}</span>
                <span className="text-gray-600">{points.toFixed(1)}</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">How to Calculate GPA</h3>
            <p className="text-gray-700 mb-2">
              GPA is calculated by dividing the total grade points earned by the total credit hours attempted.
            </p>
            <p className="text-gray-700">
              <strong>Formula:</strong> <code className="bg-gray-200 px-2 py-1 rounded">GPA = (Grade Points × Credits) / Total Credits</code>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
