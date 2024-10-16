import type { InferData } from '$lib/types/infer-data';
import type { load } from './+layout.server';

export type LayoutData = InferData<typeof load>;