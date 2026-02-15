"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FileText, Eye } from "lucide-react"

export function PdfViewer() {
  const pdfUrl = "/cv-noc-react/CV_Eng.pdf";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2">
          <Eye className="mr-2 size-5" /> View Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="size-5 text-blue-600" />
            Curriculum Vitae - Nicolás Ordóñez
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 w-full overflow-hidden rounded-md border bg-slate-100">
          <iframe
            src={`${pdfUrl}#view=FitH`}
            className="w-full h-full"
            title="PDF Viewer"
          />
        </div>
        <div className="flex justify-end gap-3 mt-4">
          <Button variant="secondary" asChild>
            <a href={pdfUrl} download="Nicolas_Ordonez_CV.pdf">
              Download PDF
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}