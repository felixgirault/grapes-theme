<?php

namespace Essence\Utility;

/**
 * An utility class to compile templates.
 */
class Template {

	/**
	 * A regex to identify variables in a template.
	 *
	 * @var string
	 */
	const variablePattern = '~\{?:(?<variable>[a-z0-9_]+)\}?~i';

	/**
	 * Compiles a template with variables.
	 *
	 * @param string $template Template.
	 * @param array $variables Variables.
	 * @return string Compiled template.
	 */
	public static function compile($template, array $variables) {
        $compile = function ($matches) use ($variables) {
			$name = $matches['variable'];

			return isset($variables[$name])
				? $variables[$name]
				: '';
		};

		return preg_replace_callback(
			self::variablePattern,
			$compile,
			$template
		);
	}
}
