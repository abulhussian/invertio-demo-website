import { megaMenuData } from "@/data/megaMenuData";

export function getAllServiceSlugs() {
      const services = [];

      megaMenuData.services.forEach((category) => {
            category.subTabs?.forEach((tab) => {
                  tab.columns?.forEach((column) => {
                        column.links?.forEach((link) => {
                              if (link.href.startsWith("/services/")) {
                                    services.push({
                                          slug: link.href.replace("/services/", ""),
                                          title: link.label,
                                    });
                              }
                        });
                  });
            });
      });

      return services;
}