import { DateTimeResolver, EmailAddressResolver } from 'graphql-scalars';
import {asNexusMethod} from 'nexus';

export const timeStamp = asNexusMethod(DateTimeResolver, 'timestamp');
export const email = asNexusMethod(EmailAddressResolver, 'email');
