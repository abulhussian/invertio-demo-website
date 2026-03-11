import { megaMenuData } from "@/data/megaMenuData";

export function getAllIndustrySlugs() {
      const industries = [];

      megaMenuData.industries.forEach((industry) => {
            industry.columns?.forEach((column) => {
                  column.links?.forEach((link) => {
                        if (link.href.startsWith("/industries/")) {
                              industries.push({
                                    slug: link.href.replace("/industries/", ""),
                                    title: link.label,
                              });
                        }
                  });
            });
      });

      return industries;
}