import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Compare BNPL Providers</h1>
        <p className="text-lg mb-6">
          Find the best Buy Now, Pay Later service that fits your needs.
        </p>
        <Button className="text-white text-lg">Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          {
            title: "Flexible Payments",
            desc: "Compare payment terms from top providers."
          },
          {
            title: "Low/No Interest",
            desc: "Find services offering 0% interest options."
          },
          {
            title: "Fast Approval",
            desc: "Get instant decisions and fast onboarding."
          }
        ].map((feature, index) => (
          <Card key={index} className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Comparison Table */}
      <section className="overflow-x-auto mb-16">
        <table className="w-full border border-gray-200 text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 border">Provider</th>
              <th className="p-4 border">Interest Rate</th>
              <th className="p-4 border">Max Limit</th>
              <th className="p-4 border">Approval Time</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Afterpay", "0%", "$2,000", "Instant"],
              ["Klarna", "0-19.99%", "$10,000", "Minutes"],
              ["Affirm", "0-30%", "$17,500", "Minutes"],
            ].map((row, i) => (
              <tr key={i} className="border-t">
                {row.map((cell, j) => (
                  <td key={j} className="p-4 border">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Choose?</h2>
        <p className="mb-6">Start comparing and make the best financial choice today.</p>
        <Button className="text-white text-lg">Compare Now</Button>
      </section>
    </main>
  );
}
