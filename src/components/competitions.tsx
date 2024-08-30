import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default async function CompetitionsComponent() {

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <div className="w-full mx-auto py-6 md:py-8 px-4 md:px-5">
      <h1 className="text-3xl font-bold text-center mb-5">Competitions</h1>
      <div className="gap-6">
        <section>
          <h2 className="text-2xl font-bold">Upcoming</h2>
          <ScrollArea className="w-full whitespace-nowrap rounded-md mb-5">
            <div className="flex space-x-4 py-5">
              <Card className="bg-background min-w-[300px] cursor-pointer hover:shadow-lg border border-muted rounded-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Summer Hackathon</h3>
                  <p className="text-muted-foreground text-wrap">
                    Join us for a 24-hour coding challenge to build innovative solutions.
                  </p>
                </CardContent>
                <CardFooter className="bg-muted py-3 px-5 flex justify-between items-center">
                  <div className="text-sm font-medium">June 15 - June 16, 2024</div>
                  <Button className="hover:bg-green-400 rounded-none" variant="outline" size="sm">
                    Register
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-background min-w-[300px] cursor-pointer hover:shadow-lg border border-muted rounded-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Summer Hackathon</h3>
                  <p className="text-muted-foreground text-wrap">
                    Join us for a 24-hour coding challenge to build innovative solutions.
                  </p>
                </CardContent>
                <CardFooter className="bg-muted py-3 px-5 flex justify-between items-center">
                  <div className="text-sm font-medium">June 15 - June 16, 2024</div>
                  <Button className="hover:bg-green-400 rounded-none" variant="outline" size="sm">
                    Register
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-background min-w-[300px] cursor-pointer hover:shadow-lg border border-muted rounded-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Summer Hackathon</h3>
                  <p className="text-muted-foreground text-wrap">
                    Join us for a 24-hour coding challenge to build innovative solutions.
                  </p>
                </CardContent>
                <CardFooter className="bg-muted py-3 px-5 flex justify-between items-center">
                  <div className="text-sm font-medium">June 15 - June 16, 2024</div>
                  <Button className="hover:bg-green-400 rounded-none" variant="outline" size="sm">
                    Register
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-background min-w-[300px] cursor-pointer hover:shadow-lg border border-muted rounded-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Summer Hackathon</h3>
                  <p className="text-muted-foreground text-wrap">
                    Join us for a 24-hour coding challenge to build innovative solutions.
                  </p>
                </CardContent>
                <CardFooter className="bg-muted py-3 px-5 flex justify-between items-center">
                  <div className="text-sm font-medium">June 15 - June 16, 2024</div>
                  <Button className="hover:bg-green-400 rounded-none" variant="outline" size="sm">
                    Register
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Past</h2>
          <ScrollArea className="whitespace-nowrap rounded-md mb-5">
            <div className="flex space-x-4 py-5">
              <Card className="bg-background min-w-[300px] cursor-pointer hover:shadow-lg border border-muted rounded-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Summer Hackathon</h3>
                  <p className="text-muted-foreground text-wrap">
                    Join us for a 24-hour coding challenge to build innovative solutions.
                  </p>
                </CardContent>
                <CardFooter className="bg-muted py-3 px-5 flex justify-between items-center">
                  <div className="text-sm font-medium">June 15 - June 16, 2024</div>
                  <Button className="rounded-none" disabled variant="outline" size="sm">
                    Completed
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-background min-w-[300px] cursor-pointer hover:shadow-lg border border-muted rounded-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Summer Hackathon</h3>
                  <p className="text-muted-foreground text-wrap">
                    Join us for a 24-hour coding challenge to build innovative solutions.
                  </p>
                </CardContent>
                <CardFooter className="bg-muted py-3 px-5 flex justify-between items-center">
                  <div className="text-sm font-medium">June 15 - June 16, 2024</div>
                  <Button className="rounded-none" disabled variant="outline" size="sm">
                    Completed
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-background min-w-[300px] cursor-pointer hover:shadow-lg border border-muted rounded-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Summer Hackathon</h3>
                  <p className="text-muted-foreground text-wrap">
                    Join us for a 24-hour coding challenge to build innovative solutions.
                  </p>
                </CardContent>
                <CardFooter className="bg-muted py-3 px-5 flex justify-between items-center">
                  <div className="text-sm font-medium">June 15 - June 16, 2024</div>
                  <Button className="rounded-none" disabled variant="outline" size="sm">
                    Completed
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-background min-w-[300px] cursor-pointer hover:shadow-lg border border-muted rounded-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Summer Hackathon</h3>
                  <p className="text-muted-foreground text-wrap">
                    Join us for a 24-hour coding challenge to build innovative solutions.
                  </p>
                </CardContent>
                <CardFooter className="bg-muted py-3 px-5 flex justify-between items-center">
                  <div className="text-sm font-medium">June 15 - June 16, 2024</div>
                  <Button className="rounded-none" disabled variant="outline" size="sm">
                    Completed
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-background min-w-[300px] cursor-pointer hover:shadow-lg border border-muted rounded-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Summer Hackathon</h3>
                  <p className="text-muted-foreground text-wrap">
                    Join us for a 24-hour coding challenge to build innovative solutions.
                  </p>
                </CardContent>
                <CardFooter className="bg-muted py-3 px-5 flex justify-between items-center">
                  <div className="text-sm font-medium">June 15 - June 16, 2024</div>
                  <Button className="rounded-none" disabled variant="outline" size="sm">
                    Completed
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
      </div>
    </div>
  )
}