import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { CardReward } from "@/components/reward/card"
import { BadgeFilter } from "@/components/ui/badge-filter"
import { Container } from "@/components/ui/container"
import { Title } from "@/components/ui/typography/title"
import { dashboardAction } from "@/features/dashboard/dashboard-slice"
import { TAGS } from "@mocks/tags"
import { useEffect, useMemo, useState } from "react"

export function PopularRewardSection() {
  const dispatch = useAppDispatch()
  const { data: rewards } = useAppSelector(x => x.dashboard.reward)
  const [filters, setFilters] = useState<string[]>([])

  useEffect(() => {
    dispatch(dashboardAction.getRewards())
  }, [dispatch])

  const filteredRewards = useMemo(() => {
    if (!filters.length) return rewards
    return rewards.filter(x => filters.includes(x.tag))
  }, [filters, rewards])

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
          {[{ label: "All" }, ...TAGS].map(tag => {
            const isAll = tag.label === "All"
            return (
              <BadgeFilter
                key={tag.label}
                {...tag}
                state={
                  (isAll && !filters.length) ||
                  (filters.length && filters.includes(tag.label))
                    ? "active"
                    : "default"
                }
                onClick={() => {
                  if (isAll) setFilters([])
                  else
                    setFilters(old =>
                      filters.includes(tag.label)
                        ? old.filter(x => x !== tag.label)
                        : [...old, tag.label],
                    )
                }}
              />
            )
          })}
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 lg:gap-8 gap-4 mt-8">
          {filteredRewards?.map((reward, idx) => (
            <CardReward key={idx} {...reward} />
          ))}
        </div>
      </Container>
    </section>
  )
}
