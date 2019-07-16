import {Lottie} from '@diez/prefabs';
import {join} from 'path';
import {IosBinding} from '../../targets/ios.api';
import {sourcesPath} from '../../utils';

const binding: IosBinding<Lottie> = {
  sources: [
    join(sourcesPath, 'ios', 'bindings', 'Lottie+Binding.swift'),
    join(sourcesPath, 'ios', 'bindings', 'Lottie+AnimationView.swift'),
  ],
  dependencies: [{
    cocoapods: {
      name: 'lottie-ios',
      versionConstraint: '~> 3.1.1',
    },
    carthage: {
      name: 'Lottie',
      github: 'airbnb/lottie-ios',
      versionConstraint: '~> 3.1.1',
    },
  }],
};

export = binding;
