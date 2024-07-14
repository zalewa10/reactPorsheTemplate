import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-10 bg-gray-100 border-t">
      <div className="flex justify-between">
        <ul>
          <li>
            <Image
              src="/porsche.jpg"
              width={100}
              height={20}
              className="h-auto w-auto mb-2"
              alt="logo"
            />
          </li>
          <li>Company name</li>
          <li>Street 12, 60-120</li>
          <li>Poland</li>
        </ul>
        <ul>
          <li className="font-bold">Section</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
        <ul>
          <li className="font-bold">Adresses</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
        <ul>
          <li className="font-bold">Contact</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
        <ul>
          <li className="font-bold">Socials</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </div>
    </footer>
  );
}
