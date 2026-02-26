import type { LocaleContent } from '../types';
import { docsIndex, blogIndex } from './meta';
import { landing } from './landing';
import whatIsPgp from './what-is-pgp';
import howToUsePgp from './how-to-use-pgp';
import pgpVsGpg from './pgp-vs-gpg';
import pgpTools from './pgp-tools';
import pgpForBeginners from './pgp-for-beginners';
import clipboardEncryption from './clipboard-encryption';
import bestPgpTools2026 from './best-pgp-tools-2026';
import pgpSoftwareComparison from './pgp-software-comparison';

export const content: LocaleContent = {
	docs: {
		'what-is-pgp': whatIsPgp,
		'how-to-use-pgp': howToUsePgp,
		'pgp-vs-gpg': pgpVsGpg,
		'pgp-tools': pgpTools,
		'pgp-for-beginners': pgpForBeginners,
		'clipboard-encryption': clipboardEncryption
	},
	blog: {
		'best-pgp-tools-2026': bestPgpTools2026,
		'pgp-software-comparison': pgpSoftwareComparison
	},
	landing,
	docsIndex,
	blogIndex
};
