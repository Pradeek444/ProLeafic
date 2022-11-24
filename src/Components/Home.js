import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <main class="bg-white w-full mt-12">
        <div class="w-full md:flex">
            <div class="leading-relaxed lead-base w-full md:w-1/4 text-center">
                <Link class="text-3xl underline" to="/diseases">Disease</Link>
                <p class="p-3 text-justify">
                    Whether you’re a Hobbyist Gardner or a seasoned farmer, it's no secret that plants are high
                    maintenance and susceptible to disease. But we have curated a list of the most common diseases so
                    you can learn how to take care of your crops best.
                </p>
            </div>
            <div class="leading-relaxed lead-base w-full md:w-1/4 text-center">
                <Link class="text-3xl underline" to="/pests">Pest</Link>
                <p class="p-3 text-justify">
                    Insects can be unwelcome guests to your plantation and cause disastrous destruction. Needless to say
                    this is not what’s best for our plants. Let's identify these pesky creatures and send them on their
                    way with our inventory of pests.
                </p>
            </div>
            <div class="leading-relaxed lead-base w-full md:w-1/4 text-center">
                <Link class="text-3xl underline" to="/">Scanner</Link>
                <p class="p-3 text-justify">
                    Now identifying the disease of your crops is just a snap away. Using our smart Neural Network simply
                    take a picture of the affected part of your crop. And we’ll identify the disease for you. Then
                    simply use our disease directory to bring your crops back to life
                </p>
            </div>
            <div class="leading-relaxed lead-base w-full md:w-1/4 text-center">
                <Link class="text-3xl underline" to="/">Diagnostic Test</Link>
                <p class="p-3 text-justify">
                    Still can’t figure out what happened to your plant? We’ve got you covered. Take our diagnostic test.
                    Answer a few simple questions and we’ll give you suggestions based on our disease directory.
                </p>
            </div>
        </div>
        <div class="text-center mt-10">
            <Link class="w-full md:w-1/2 inline-flex items-center text-center justify-center py-2 bg-yellow-400 border-4 border-black rounded"
                to="/" >
                <i class="fa-solid fa-camera"></i>
                <p class="text-lg mx-2">Scanner</p>
            </Link>
            <div class="m-4"></div>
            <Link class="w-full md:w-1/2 inline-flex items-center text-center justify-center py-2 bg-yellow-400 border-4 border-black rounded"
                to="/">
                <i class="fa-solid fa-file-lines"></i>
                <p class="text-lg mx-2">Diagnostic Test</p>
            </Link>
        </div>
    </main>
    </div>
  )
}