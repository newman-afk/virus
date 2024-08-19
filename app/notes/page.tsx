"use client";

import Link from "next/link";

const volume1Chapters = ["第一章 基础", "第二章 感染周期"];

function ChapterLists(chapters: string[]) {
  return chapters.map((chapter, index) => (
    <Link
      href={"notes/volume1/chapter" + (index + 1)}
      className="max-w-fit"
      key={chapter}
    >
      {chapter}
    </Link>
  ));
}

export default function Notes() {
  return (
    <>
      <p className="text-center text-lg">卷1 分子生物学</p>
      <div className="my-7 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {ChapterLists(volume1Chapters)}
      </div>
      <p className="text-center text-lg">卷2 致病机理及防治</p>
    </>
  );
}
