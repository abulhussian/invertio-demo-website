import { megaMenuData } from "@/data/megaMenuData";

export function getAllSolutionSlugs() {
      const solutions = [];

      megaMenuData.solutions.forEach((category) => {
            category.subTabs?.forEach((tab) => {
                  tab.columns?.forEach((column) => {
                        column.links?.forEach((link) => {
                              if (link.href.startsWith("/solutions/")) {
                                    solutions.push({
                                          slug: link.href.replace("/solutions/", ""),
                                          title: link.label,
                                    });
                              }
                        });
                  });
            });
      });

      return solutions;
}