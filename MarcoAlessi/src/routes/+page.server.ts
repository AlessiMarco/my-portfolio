import type { PageServerLoad } from './$types';
import type { TimelineItem } from '$lib/data/timeline';
import { timeline } from '$lib/data/timeline';

export const load: PageServerLoad = () => {
  return {
    summaries: timeline.map((item: TimelineItem) => ({
      title: item.title,
      period: item.period,
      subtitle: item.subtitle,
      skills: item.skills,
	  category: item.category
    }))
  };
};
