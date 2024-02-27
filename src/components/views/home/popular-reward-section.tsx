import { CardReward } from "@/components/reward/card"
import { BadgeFilter } from "@/components/ui/badge-filter"
import { Container } from "@/components/ui/container"
import { Title } from "@/components/ui/typography/title"
import { REWARDS } from "@mocks/reward"
import { TAGS } from "@mocks/tags"

export function PopularRewardSection() {
  return (
    <section id="popular-rewards" className="mt-16">
      <Container>
        <div>
          <Title
            title="Popular Rewards"
            desc="Explore our latest popular rewards!"
          />
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          {[{ label: "All" }, ...TAGS].map(tag => (
            <BadgeFilter
              key={tag.label}
              {...tag}
              state={tag.label === "All" ? "active" : "default"}
            />
          ))}
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 lg:gap-8 gap-4 mt-8">
          {Array.from({ length: 8 }, (_, i) => REWARDS[0]).map(
            (reward, idx) => (
              <CardReward key={idx} {...reward} />
            ),
          )}
        </div>
      </Container>
    </section>
  )
}
