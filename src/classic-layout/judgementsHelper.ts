import {StrictJudgementMap} from './types';

export function convertJudgementsToArray(jarr: StrictJudgementMap): number[] {
  if (typeof jarr.cp === 'number' && jarr.cp !== 0) {
    return [jarr.cp, jarr.perfect, jarr.great, jarr.good, jarr.miss];
  }
  return [jarr.perfect, jarr.great, jarr.good, jarr.miss];
}
