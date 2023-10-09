import PreviewTabs from "@/components/preview-tabs"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1>Preview</h1>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <PreviewTabs />
      </div>
    </section>
  )
}
