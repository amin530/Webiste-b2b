import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function CatalogLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Skeleton className="h-8 w-64 mb-4" />
        <Skeleton className="h-4 w-96" />
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar Skeleton */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-4 space-y-6">
            <div>
              <Skeleton className="h-5 w-20 mb-3" />
              <div className="space-y-2">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 flex-1" />
                    <Skeleton className="h-4 w-8" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Skeleton className="h-5 w-16 mb-3" />
              <div className="space-y-2">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 flex-1" />
                    <Skeleton className="h-4 w-8" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Skeleton className="h-5 w-24 mb-3" />
              <Skeleton className="h-6 w-full mb-2" />
              <div className="flex justify-between">
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-4 w-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Skeleton */}
        <div className="flex-1">
          {/* Search and Controls Skeleton */}
          <div className="mb-6 space-y-4">
            <div className="flex gap-4">
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 w-24 lg:hidden" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-48" />
                <Skeleton className="h-4 w-32" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
              </div>
            </div>
          </div>

          {/* Products Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="p-0">
                  <Skeleton className="aspect-square w-full" />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex gap-2 mb-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-12" />
                  </div>
                  <Skeleton className="h-5 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <div className="flex items-center gap-1 mb-2">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-3 w-12" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                  <div className="flex gap-1">
                    <Skeleton className="h-5 w-12" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </CardContent>
                <div className="p-4 pt-0">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
