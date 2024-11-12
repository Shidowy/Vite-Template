import { Button } from '@/components/ui/button'

function App() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Shadcn UI + Tailwind CSS</h1>
                <Button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Click Me
                </Button>
            </div>
        </div>
    )
}

export default App