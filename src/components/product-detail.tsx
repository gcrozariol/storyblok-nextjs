import { Minus, Plus, Star, StarHalf } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProductPage() {
  return (
    <div className="bg-background text-white">
      <main className="container mx-auto py-8 px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden aspect-square flex items-center justify-center">
              <div className="text-center text-gray-400">
                Electric Guitar Image
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((view) => (
                <div
                  key={view}
                  className="bg-white rounded-lg p-4 flex items-center justify-center aspect-square cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <span className="text-sm text-gray-400">View {view}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Fender Stratocaster Elite</h1>
              <p className="text-gray-400">Professional Electric Guitar</p>
            </div>

            <div className="flex items-center">
              {[1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-500 text-yellow-500"
                />
              ))}
              <StarHalf className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              <span className="ml-2 text-gray-400">(127 reviews)</span>
            </div>

            <div className="text-3xl font-bold">$1,499.99</div>

            <div>
              <p className="mb-2">Color:</p>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-black border-2 border-white cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-gray-500 cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-white cursor-pointer"></div>
              </div>
            </div>

            <div>
              <p className="mb-2">Quantity:</p>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-md border-gray-600 text-white"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="w-10 h-10 flex items-center justify-center border border-gray-600 mx-2">
                  1
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-md border-gray-600 text-white"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1 bg-white text-black hover:bg-gray-200">
                Add to Cart
              </Button>
              <Button className="flex-1 bg-[#111111] hover:bg-[#222222] border border-gray-700 text-white">
                Buy Now
              </Button>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Body Material</span>
                  <span>Alder</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Neck Material</span>
                  <span>Maple</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fingerboard</span>
                  <span>Rosewood</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pickups</span>
                  <span>3x Single Coil</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Gibson Les Paul', price: '$1,899.99' },
              { name: 'PRS Custom 24', price: '$2,199.99' },
              { name: 'Ibanez RG550', price: '$999.99' },
              { name: 'Jackson Soloist', price: '$1,299.99' },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-lg overflow-hidden"
              >
                <div className="bg-white aspect-square flex items-center justify-center">
                  <span className="text-gray-400">Guitar Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-400">Electric Guitar</p>
                  <p className="font-bold mt-2">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
