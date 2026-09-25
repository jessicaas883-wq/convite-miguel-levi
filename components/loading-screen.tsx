'use client'

export function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <button type="button" onClick={onComplete}>
        Teste
      </button>
    </div>
  )
}
